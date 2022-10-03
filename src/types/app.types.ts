export interface LoginResponse_I {
  usuario: UserResponse_I
  catalogos: Catalogos_I
  modulos: Object
}

export interface Catalogos_I {
  dispositivos: Dispositivos_I[]
}

export interface Dispositivos_I {
  vigente: number
  descripcion_dispositivo: string
  cat_dispositivos_mu_id: number
  cat_dispositivos_mu_categorias_id: number
  cat_usuarios_licencias_id: number
}

export interface UserResponse_I {
  usuario: string
  nombre: string
  token: string
  cat_usuarios_licencia_id: number
}
