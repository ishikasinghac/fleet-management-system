package com.fleet_managment_service.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "vehicles")
public class Vehicle {

  @Id
  private String id;

  private String ownername;
  private String number;
  private String vehicletype;

  private String ownerid;

  public Vehicle(String id, String ownername, String number, String vehicletype, String ownerid) {
    this.id = id;
    this.ownername = ownername;
    this.number = number;
    this.vehicletype = vehicletype;
    this.ownerid = ownerid;
  }

  public Vehicle() {
  }

  public String getId() {
    return id;
  }

  public void setId(String id) {
    this.id = id;
  }

  public String getOwnername() {
    return ownername;
  }

  public void setOwnername(String ownername) {
    this.ownername = ownername;
  }

  public String getNumber() {
    return number;
  }

  public void setNumber(String number) {
    this.number = number;
  }

  public String getVehicletype() {
    return vehicletype;
  }

  public void setVehicletype(String vehicletype) {
    this.vehicletype = vehicletype;
  }


  public String getOwnerid() {
    return ownerid;
  }

  public void setOwnerid(String ownerid) {
    this.ownerid = ownerid;
  }

  @Override
  public String toString() {
    return "Vehicle{" + "id='" + id + '\'' + ", owner='" + ownername + '\'' + ", number='" + number +
        '\'' + ", vehicletype='" + vehicletype + '\'' + ", ownerid='" + ownerid + '\'' + '}';
  }
}
