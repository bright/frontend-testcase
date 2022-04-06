import * as S from "./Button.styled"

const Button = (props: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return <S.Button {...props} />
}

export { Button }
