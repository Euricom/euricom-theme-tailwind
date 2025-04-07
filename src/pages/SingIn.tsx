import { Button } from '~/components/ui/button';
import EuricomLogo from '../assets/euricom-logo.svg';
import MicrosoftLogo from '../assets/microsoft-logo.svg';
import { defaultValues } from '~/utils/defaultValues';
import { ThemeToggle } from '~/components/theme-toggle';
import { useNavigate } from 'react-router';

export default function SignIn() {
  const { title, description, signInImage } = defaultValues;
  const navigate = useNavigate();

  const handleSignIn = () => {
    navigate('/default-theme');
  };

  return (
    <div className="h-screen flex relative">
      <div className="absolute right-4 top-4 z-50">
        <ThemeToggle />
      </div>

      <div className="hidden md:block md:w-1/2">
        <div className="relative h-full">
          <img src={signInImage} alt="Euricom office" className="h-full w-full object-cover" />
          <div className="absolute left-1/2 top-1/2 w-2/3 -translate-x-1/2 -translate-y-1/2 bg-accent/80 rounded-md p-3 text-center text-3xl text-white">
            <h1 className="text-5xl font-bold">{title}</h1>
            <h2 className="text-2xl">{description}</h2>
          </div>
        </div>
      </div>
      <div className="flex w-full flex-1 flex-col gap-10 items-center justify-center md:w-1/2">
        <img src={EuricomLogo} alt="euricom-logo" width={263} height={60} />
        <Button className="inline-flex items-center justify-center gap-2 whitespace-nowrap" onClick={handleSignIn}>
          <img src={MicrosoftLogo} alt="microsoft" width={16} height={16} />
          SIGN IN WITH PROVIDER
        </Button>
      </div>
    </div>
  );
}
