interface H3GradientTextProps {
  text: string;
  textalign: string;
}

const H3GradientText: React.FC<H3GradientTextProps> = ({ text, textalign}) => {
  return (
    <div className="bg-gradient-to-br from-[#00B7AB] to-[#1F2259] text-transparent bg-clip-text">
      <h3 className={`text-2xl xs:text-3xl md:text-4xl font-bold ${textalign || ''}`}>
        {text}
      </h3>
    </div>
  );
};

export default H3GradientText;