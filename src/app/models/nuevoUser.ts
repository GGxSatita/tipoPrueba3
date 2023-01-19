export type NuevoUser = {
  firstName : string,
  lastName : string,
  age: number,
  userName : string,
  password: string,
  birthDate :string,
  gender : 'male' | 'female'
}

export type NuevoUserResponse = {
  respuesta : Array<NuevoUser>
}
