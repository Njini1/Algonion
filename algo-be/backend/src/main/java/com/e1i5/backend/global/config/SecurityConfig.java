package com.e1i5.backend.global.config;

import com.e1i5.backend.domain.user.repository.AuthRepository;
import com.e1i5.backend.domain.user.service.AuthServiceImpl;
import com.e1i5.backend.global.jwt.JwtAuthenticationEntryPoint;
import com.e1i5.backend.global.jwt.TokenAuthenticationFilter;
import com.e1i5.backend.global.jwt.TokenProvider;
import com.e1i5.backend.global.oauth.OAuth2AuthorizationRequestBasedOnCookieRepository;
import com.e1i5.backend.global.oauth.OAuth2SuccessHandler;
import com.e1i5.backend.global.oauth.OAuth2UserCustomService;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityCustomizer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@RequiredArgsConstructor
@Configuration
@EnableWebSecurity
//@EnableGlobalMethodSecurity(prePostEnabled = true) // @PreAuthorize, @PreFilter /@PostAuthorize, @PostFilter어노테이션 활성화 여부
public class SecurityConfig{
    private final OAuth2UserCustomService oAuth2UserCustomService;
    private final TokenProvider tokenProvider;
    private final AuthRepository userRepository;
    private final AuthServiceImpl userService;
    private final JwtAuthenticationEntryPoint jwtAuthenticationEntryPoint;

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http.csrf().disable()
                .httpBasic().disable()
                .formLogin().disable();
//                .logout().disable();

        http.sessionManagement()
                .sessionCreationPolicy(SessionCreationPolicy.STATELESS);

//        http.addFilterBefore(tokenAuthenticationFilter(), BasicAuthenticationFilter.class); // filter의 에러값을 받을 수 있음
        http.addFilterBefore(tokenAuthenticationFilter(), UsernamePasswordAuthenticationFilter.class);
//        http.addFilterBefore(new TokenAuthenticationFilter(authenticationManager(http.getSharedObject(AuthenticationConfiguration.class)), tokenProvider), BasicAuthenticationFilter.class);

        http.authorizeRequests()
//                .requestMatchers("/**").permitAll();
                .requestMatchers("/v1/user/token").permitAll()
                .anyRequest().authenticated();
//                .requestMatchers("/**").authenticated();

        http.exceptionHandling().authenticationEntryPoint(jwtAuthenticationEntryPoint);
        http.oauth2Login()
                .authorizationEndpoint()
                .authorizationRequestRepository(oAuth2AuthorizationRequestBasedOnCookieRepository())
                .and()
                .successHandler(oAuth2SuccessHandler())
                .userInfoEndpoint()
                .userService(oAuth2UserCustomService);


        return http.build();
    }


    @Bean
    public OAuth2SuccessHandler oAuth2SuccessHandler() {
        return new OAuth2SuccessHandler(tokenProvider,
                userRepository,
                oAuth2AuthorizationRequestBasedOnCookieRepository(),
                userService
        );
    }

    @Bean
    public TokenAuthenticationFilter tokenAuthenticationFilter() {
        return new TokenAuthenticationFilter(tokenProvider);
    }

    @Bean
    public OAuth2AuthorizationRequestBasedOnCookieRepository oAuth2AuthorizationRequestBasedOnCookieRepository() {
        return new OAuth2AuthorizationRequestBasedOnCookieRepository();
    }

    @Bean
    public BCryptPasswordEncoder bCryptPasswordEncoder() {
        return new BCryptPasswordEncoder();
    }
}
