import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

export interface ResponseObject {
  features?: (CoordBikeshare)[] | null;
  info: Info;
}

export interface Info {
  seed: string;
  results: number;
  page: number;
  version: string;
}

export interface CoordBikeshare {
  gender: string;
  name: Name;
  location: Location;
  email: string;
  dob: string;
  phone: string;
  cell: string;
  id: Id;
  picture: Picture;
  nat: string;
}

export interface Name {
  title: string;
  first: string;
  last: string;
}

export interface Location {
  street: string;
  city: string;
  state: string;
  postcode: number;
}

export interface Id {
  name: string;
  value: string;
}

export interface Picture {
  large: string;
  medium: string;
  thumbnail: string;
}

// @Injectable({
//   providedIn: 'root'
// })
@Injectable()
export class CoordBikeshareService  {

  public baseUrl = 'https://api.coord.co/v1/bike/location/';

  //https://api.coord.co/v1/bike/location?access_key=p9H_wRiQaoEoIKQBaJnA1oR77yCBY-6Z-AEku8bgJNk&latitude=33.7490&longitude=-84.3880&radius_km=10

  params = new HttpParams()
    .append('access_key', 'p9H_wRiQaoEoIKQBaJnA1oR77yCBY-6Z-AEku8bgJNk')
    .append('latitude', '33.7490')
    .append('longitude', '-84.3880')
    .append('radius_km', '10');

  constructor(private httpClient: HttpClient) {
  }

  getAll(pageSize : number = 100) {
    const params = this.params.append('features', ''+ pageSize);
    return this.httpClient.get<ResponseObject>(this.baseUrl, { params }).pipe(
      map((response: ResponseObject) => response.features)
    )
  }

  getById(id: string) {
      const params = this.params
        .append('id', id)
        .append('features', '1');
    return this.httpClient.get<ResponseObject>(this.baseUrl, { params }).pipe(
      map((response: ResponseObject) => response.features[0])
    )
  }
}
