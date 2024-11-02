export interface User {
    ID: string;
    Email: string;
    Fname: string;
    Lname: string;
    Password: string;
    PhoneNumber: string;
    Address: string;
    Nationality: string;
    CitizenID: string;
    BirthDate: string;
}

export interface Vehicle {
    ID: string;
    RegistrationDate: string;
    RegistrationNumber: string;
    Province: string;
    VehicleType: string;
    VehicleCategory: string;
    Characteristics: string;
    Brand: string;
    Model: string;
    ModelYear: string;
    VehicleColor: string;
    VehicleNumber: string;
    VehicleNumberLocation: string;
    EngineBrand: string;
    EngineNumber: string;
    EngineNumberLocation: string;
    ChasisNumber: string;
    FuelType: string;
    WheelType: string;
    TotalPiston: number;
    Cc: number;
    HorsePower: number;
    SeatingCapacity: number;
    WeightUnlanden: number;
    WeightLaden: number;
    Miles: number;
}

export interface Transaction {
    ID: string;
    Price: number;
    InsuranceType: string;
    Status: string;
    ESlipImageUrl: string;
    CrImageUrl: string;
    CipNumber: string;
    VipNumber: string;
    CreatedAt: string;
    UpdatedAt: string;
}

export interface TransactionData {
    User: User;
    Vehicle: Vehicle;
    Transaction: Transaction;
}

export interface TransactionWithUndefined {
    transaction: TransactionData | undefined;
}

export interface UserWithUndefined {
    user: User | undefined
    setOnclickUpdate: any

}
