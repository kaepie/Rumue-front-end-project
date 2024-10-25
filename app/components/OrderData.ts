export interface Car {
    registrationDate: string;
    licenseNumber: string;
    province: string;
    carType: string;
    seatCapacity: number;
    characteristic: string;
    brand: string;
    model: string;
    year: string;
    color: string;
    chassisNumber: string;
    engineNumber: string;
    fuelType: string;
    cylinderCount: number;
    displacementCC: number;
    horsepower: number;
    seatCount: number;
    carWeight: number;
    grossWeight: number;
    wheelCount: number;
  }
  
  export interface Owner {
    name: string;
    idCard: string;
    birthDate: string;
    nationality: string;
    phone: string;
    address: string;
  }
  
  export interface OrderData {
    orderId: string;
    type: string;
    creationDate: string;
    status: string;
    invoice: string;
    paymentProof: string;
    car: Car;
    owner: Owner;
  }