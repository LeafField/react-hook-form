import "./App.css"
import { useForm } from "react-hook-form"
import { validationSchema } from "./libs/validationSchema"
import { zodResolver } from "@hookform/resolvers/zod"

interface LoginForm {
  name: string
  email: string
  password: string
}

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>({
    mode: "onChange",
    resolver: zodResolver(validationSchema),
  })

  const onSubmit = (data: LoginForm) => {
    console.log(data)
  }

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="name">名前</label>
        <input type="text" id="name" {...register("name")} />
        {errors.name && <p>{errors.name?.message}</p>}
        <label htmlFor="email">メールアドレス</label>
        <input type="email" id="email" {...register("email")} />
        {errors.email && <p>{errors.email?.message}</p>}
        <label htmlFor="password">パスワード</label>
        <input type="password" id="password" {...register("password")} />
        {errors.password && <p>{errors.password?.message}</p>}
        <button type="submit">送信</button>
      </form>
    </div>
  )
}

export default App
