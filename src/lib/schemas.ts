import { z } from 'zod'

export const LineaSchema = z.object({
  id: z.string(),
  orden: z.number(),
  nombre: z.string(),
  grupo: z.string(),
  oficial: z.boolean(),
  resumen: z.string(),
  temas: z.array(z.string()).default([]),
})

export const ProyectoSchema = z.object({
  id: z.string(),
  titulo: z.string(),
  linea: z.string(),
  estado: z.enum(['en-curso', 'terminado']),
  año: z.number(),
  resumen: z.string(),
  autores: z.array(z.string()),
  enlace: z.string().url().optional(),
})

export const IntegranteSchema = z.object({
  nombre: z.string(),
  rol: z.string(),
  linea: z.string().optional(),
  foto: z.string().optional(),
  github: z.string().url().optional(),
  linkedin: z.string().url().optional(),
  orcid: z.string().optional(),
})

export type Linea = z.infer<typeof LineaSchema>
export type Proyecto = z.infer<typeof ProyectoSchema>
export type Integrante = z.infer<typeof IntegranteSchema>