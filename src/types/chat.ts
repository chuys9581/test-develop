export interface Cliente {
  _id: string
  name: string
  createdAt: string
  updatedAt: string
}

export interface Multimedia {
  file: string
  size: string
  ext: string
  mimetype: string
  thumbnail?: string
  filename?: string
}

export interface Mensaje {
  _id: string
  type: 'Message'
  client: string
  message: {
    _id: string
    type: 'text' | 'image' | 'video' | 'document' | 'tText'
    text?: string
    multimedia?: Multimedia
    typeUser: 'Client' | 'User' | 'UserSystem'
    user: string
    errorCode: number | null
    createdAt: string
    updatedAt: string
    readAt?: string
    deliveredAt?: string
  }
  createdAt: string
}
