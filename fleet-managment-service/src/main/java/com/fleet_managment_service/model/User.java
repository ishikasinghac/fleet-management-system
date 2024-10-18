package com.fleet_managment_service.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "users")
public class User {
  @Id
  private String id;

  private String username;
  private String email;
  private String password;
  private String usertype; // driver | user | admin

  public User(String id, String username, String email, String password, String usertype) {
    this.id = id;
    this.username = username;
    this.email = email;
    this.password = password;
    this.usertype = usertype;
  }

  public User() {
  }

  public String getId() {
    return id;
  }

  public void setId(String id) {
    this.id = id;
  }

  public String getUsername() {
    return username;
  }

  public void setUsername(String username) {
    this.username = username;
  }

  public String getEmail() {
    return email;
  }

  public void setEmail(String email) {
    this.email = email;
  }

  public String getPassword() {
    return password;
  }

  public void setPassword(String password) {
    this.password = password;
  }

  public String getUsertype() {
    return usertype;
  }

  public void setUsertype(String usertype) {
    this.usertype = usertype;
  }

  @Override
  public String toString() {
    return "User{" + "id='" + id + '\'' + ", username='" + username + '\'' + ", email='" + email +
        '\'' + ", password='" + password + '\'' + ", usertype='" + usertype + '\'' + '}';
  }
}
