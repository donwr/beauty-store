interface LogoProps {
  className?: string;
}
export default function LogoIcon({ className }: LogoProps) {
  return (
    <div className={`${className}`}>
      <img src="/images/logo.png" alt="loomis" className="" />
    </div>
  );
}
