import * as React from 'react'
import { ReactNode } from 'react'
import { FieldError, UseFormRegister } from 'react-hook-form'

import { TFilterParams } from 'types/movie'

import * as S from './styled'

type TEntryProps = {
  label: string
  register: UseFormRegister<TFilterParams>
  error: FieldError | undefined
  name: keyof TFilterParams
  errorMessage?: string | null
  children?: ReactNode
} & (
  | { type: 'input' }
  | {
      type: 'select'
      children: ReactNode
    }
)

const FormEntry = ({
  error,
  register,
  errorMessage,
  label,
  name,
  type,
  children,
}: TEntryProps) => {
  return (
    <S.Entry>
      <S.EntryLabel htmlFor={`el-${name}`}>{label}</S.EntryLabel>

      {type === 'input' && (
        <S.EntryInput id={`el-${name}`} {...register(name)} />
      )}

      {type === 'select' && (
        <S.EntrySelect id={`el-${name}`} {...register(name)}>
          {children}
        </S.EntrySelect>
      )}

      {error && (
        <S.EntryError htmlFor={`el-${name}`}>
          {errorMessage || 'error'}
        </S.EntryError>
      )}
    </S.Entry>
  )
}

export default FormEntry
