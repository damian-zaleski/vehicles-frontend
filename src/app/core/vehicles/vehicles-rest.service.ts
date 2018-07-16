import { HttpClient } from '@angular/common/http';
import { VehiclesService } from "@app/core/vehicles/vehicles.service";
import { Injectable } from "@angular/core";
import { Vehicle } from "@app/shared/models/vehicle";
import { environment } from './../../../environments/environment';
import { Observable } from 'rxjs';
import { VehicleDto } from '@app/shared/dtos/vehicle-dto';


@Injectable()
export class VehiclesRestService implements VehiclesService {

  vehicleDto: VehicleDto;

  public constructor(private http: HttpClient) {
  }

  public getVehicles(): Observable<VehicleDto[]> {
    return this.http.get<VehicleDto[]>(environment.api + '/vehicles');
  }

  public addVehicle(vehicleDto: VehicleDto): Observable<VehicleDto> {
    return this.http.post<VehicleDto>(environment.api + '/vehicles', vehicleDto);
  }

}