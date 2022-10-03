export interface LoginResponse_I {
  usuario: UserResponse_I
  catalogos: Object
  modulos: Object
}

export interface UserResponse_I {
  usuario: string
  nombre: string
  token: string
  cat_usuarios_licencia_id: number
}
