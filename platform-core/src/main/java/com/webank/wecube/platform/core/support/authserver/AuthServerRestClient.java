package com.webank.wecube.platform.core.support.authserver;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;

import javax.annotation.PostConstruct;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.webank.wecube.platform.auth.client.http.JwtSsoRestTemplate;
import com.webank.wecube.platform.core.http.UserJwtSsoTokenRestTemplate;
import com.webank.wecube.platform.core.support.RestClient;

@Service
@EnableConfigurationProperties({ AuthServerRestClientProperties.class })
public class AuthServerRestClient implements RestClient {

    private static final Logger log = LoggerFactory.getLogger(AuthServerRestClient.class);

    private static AuthServerRestClient INSTANCE;

    private String registerLocalUserPath = "/auth/v1/users";
    private String retrieveAllUserAccountsPath = "/auth/v1/users";
    private String deleteUserAccountByUserId = "/auth/v1/users/{user-id}";

    @Autowired
    private UserJwtSsoTokenRestTemplate userJwtSsoTokenRestTemplate;

    @Autowired
    @Qualifier("jwtSsoRestTemplate")
    private JwtSsoRestTemplate jwtSsoRestTemplate;

    @Autowired
    private AuthServerRestClientProperties authServerRestClientProperties;

    @PostConstruct
    public void afterPropertiesSet() {
        INSTANCE = this;
        if (log.isDebugEnabled()) {
            log.debug("auth server properties:host={},port={}", authServerRestClientProperties.getHost(),
                    authServerRestClientProperties.getPort());
        }

    }

    public static AuthServerRestClient instance() {
        if (INSTANCE == null) {
            throw new RuntimeException(String.format("%s is NOT loaded.", AuthServerRestClient.class.getName()));
        }

        return INSTANCE;
    }

    public AsUserDto registerLocalUser(AsUserDto asUserDto) {
        AsUserDto result = postForObject(registerLocalUserPath, asUserDto,
                new ParameterizedTypeReference<AuthServerRestResponseDto<AsUserDto>>() {
                });
        return result;
    }

    public List<AsUserDto> retrieveAllUserAccounts() {
        List<AsUserDto> asUsers = getForObject(retrieveAllUserAccountsPath,
                new ParameterizedTypeReference<AuthServerRestResponseDto<List<AsUserDto>>>() {
                });
        return asUsers;
    }

    public void deleteUserAccountByUserId(String userId) {
        deleteObject(deleteUserAccountByUserId, userId);
    }

    protected void deleteObject(String path, Object... uriVariables) throws AuthServerClientException {
        String query = null;
        URI requestUri = null;
        try {
            requestUri = new URI(authServerRestClientProperties.getHttpSchema(), null,
                    authServerRestClientProperties.getHost(), authServerRestClientProperties.getPort(), path, query,
                    null);
        } catch (URISyntaxException e) {
            log.error("building request URI errors", e);
            throw new AuthServerClientException();
        }
        URI expandedUri = userJwtSsoTokenRestTemplate.getUriTemplateHandler().expand(requestUri.toString(), uriVariables);
        
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        HttpEntity<Object> requestEntity = new HttpEntity<Object>(headers);
        ResponseEntity<AuthServerRestResponseDto<Object>> responseEntity = userJwtSsoTokenRestTemplate.exchange(expandedUri,
                HttpMethod.DELETE, requestEntity, new ParameterizedTypeReference<AuthServerRestResponseDto<Object>>(){});
        AuthServerRestResponseDto<Object> responseDto = responseEntity.getBody();
        String status = responseDto.getStatus();
        if (!AuthServerRestResponseDto.STATUS_OK.equalsIgnoreCase(status)) {
            log.error("rest service invocation failed,status={},message={}", responseDto.getStatus(),
                    responseDto.getMessage());
            throw new AuthServerClientException(responseDto.getStatus(), responseDto.getMessage());
        }
    }

    protected <T> T getForObject(String path, ParameterizedTypeReference<AuthServerRestResponseDto<T>> responseType)
            throws AuthServerClientException {
        String query = null;
        URI requestUri = null;
        try {
            requestUri = new URI(authServerRestClientProperties.getHttpSchema(), null,
                    authServerRestClientProperties.getHost(), authServerRestClientProperties.getPort(), path, query,
                    null);
        } catch (URISyntaxException e) {
            log.error("building request URI errors", e);
            throw new AuthServerClientException();
        }

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        HttpEntity<Object> requestEntity = new HttpEntity<Object>(headers);
        ResponseEntity<AuthServerRestResponseDto<T>> responseEntity = userJwtSsoTokenRestTemplate.exchange(requestUri,
                HttpMethod.POST, requestEntity, responseType);
        AuthServerRestResponseDto<T> responseDto = responseEntity.getBody();
        String status = responseDto.getStatus();
        if (!AuthServerRestResponseDto.STATUS_OK.equalsIgnoreCase(status)) {
            log.error("rest service invocation failed,status={},message={}", responseDto.getStatus(),
                    responseDto.getMessage());
            throw new AuthServerClientException(responseDto.getStatus(), responseDto.getMessage());
        }
        return responseDto.getData();
    }

    protected <T> T postForObject(String path, Object request,
            ParameterizedTypeReference<AuthServerRestResponseDto<T>> responseType) throws AuthServerClientException {
        String query = null;
        URI requestUri = null;
        try {
            requestUri = new URI(authServerRestClientProperties.getHttpSchema(), null,
                    authServerRestClientProperties.getHost(), authServerRestClientProperties.getPort(), path, query,
                    null);
        } catch (URISyntaxException e) {
            log.error("building request URI errors", e);
            throw new AuthServerClientException();
        }

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        HttpEntity<Object> requestEntity = new HttpEntity<Object>(request, headers);
        ResponseEntity<AuthServerRestResponseDto<T>> responseEntity = userJwtSsoTokenRestTemplate.exchange(requestUri,
                HttpMethod.POST, requestEntity, responseType);
        AuthServerRestResponseDto<T> responseDto = responseEntity.getBody();
        String status = responseDto.getStatus();
        if (!AuthServerRestResponseDto.STATUS_OK.equalsIgnoreCase(status)) {
            log.error("rest service invocation failed,status={},message={}", responseDto.getStatus(),
                    responseDto.getMessage());
            throw new AuthServerClientException(responseDto.getStatus(), responseDto.getMessage());
        }
        return responseDto.getData();
    }
}
