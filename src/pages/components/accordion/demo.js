export default `
function Example() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => {
      window.clearTimeout(timeoutId);
    };
  }, []);

  if (isLoading) {
    return <AccordionSkeleton open count={3} />;
  }

  return (
    <Accordion>
      <AccordionItem title="Panel A" open>Panel A</AccordionItem>
      <AccordionItem title="Panel B">Panel B</AccordionItem>
      <AccordionItem title="Panel C">Panel C</AccordionItem>
    </Accordion>
  );
}

render(<Example />);
`;
