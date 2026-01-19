export default function CalculatorButton({
  value,
  classNmae,
  onClick,
}: ButtonConfigs) {
  return (
    <>
      <input
        type="button"
        className={classNmae}
        value={value}
        onClick={onClick}
      />
    </>
  );
}
