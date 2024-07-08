import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Link, Navigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

// Definindo o esquema de validação com Yup
const schema = yup.object().shape({
  email: yup.string().email('Email inválido').required('Email é obrigatório'),
  password: yup
    .string()
    .min(6, 'A senha deve ter pelo menos 6 caracteres')
    .required('Senha é obrigatória'),
});

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const [msg, setMsg] = useState();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(
        'http://localhost:3000/auth/login',
        data
      );
      if (response.status === 200) setMsg('OK');
    } catch (error) {
      setMsg(error.response.data);
    }
  };

  

  if (msg === 'OK') return <Navigate to="/" />;

  return (
    <div
      className="relative flex items-center justify-center min-h-screen bg-cover"
      style={{ backgroundImage: "url('/background.jpg')" }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 w-full max-w-md p-8 space-y-4 bg-white bg-opacity-20 rounded shadow-md">
        <h2 className="text-2xl font-bold text-center text-white">Login</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-white"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Digite o e-mail"
              {...register('email')}
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-white">{errors.email.message}</p>
            )}
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-white"
            >
              Senha
            </label>
            <input
              type="password"
              id="password"
              placeholder="Digite a sua senha"
              {...register('password')}
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
            />
            {errors.password && (
              <p className="mt-1 text-sm text-white">
                {errors.password.message}
              </p>
            )}
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-200"
          >
            Entrar
          </button>
        </form>
        <div className="flex justify-between text-sm text-white">
          <Link to="/cadastro" className="hover:underline">
            Criar uma conta
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
