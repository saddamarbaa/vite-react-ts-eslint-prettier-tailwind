import Button from 'components/Button';
import { test } from 'utils/test';

console.log(test);

export default function App() {
  return (
    <div className='flex h-screen w-full items-center justify-center text-xl font-bold'>
      <div className='flex w-full max-w-md flex-col space-x-5 text-center'>
        <div>React + Vite App</div>
        <Button> Testing absolute import</Button>
      </div>
    </div>
  );
}
