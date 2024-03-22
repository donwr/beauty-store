interface LogoProps {
    className?: string;
  }
  export default function LogoIconAlternate({ className }: LogoProps) {
    return (
      <div className={`${className}`}>
        <img src="/images/logo-alternate.png" alt="loomis" className="" />
      </div>
    );
  }
  