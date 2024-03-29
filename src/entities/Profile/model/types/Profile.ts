import { Country } from "@/entities/Country"
import { Currency } from "@/entities/Currency"

export interface Profile {
  id?: string
  first?: string
  lastname?: string
  age?: Number
  currency?: Currency
  country?: Country
  city?: string
  username?: string
  avatar?: string
}

export interface ProfileRate {
  rate: number
  feedback?: string
}
