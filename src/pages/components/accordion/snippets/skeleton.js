/**
 * Copyright IBM Corp. 2016, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

export default `
function Example() {
  const [isLoading, setIsLoading] = useState(true);

  function onClick() {
    setIsLoading(!isLoading);
  }

  return (
    <>
      <Button onClick={onClick}>Toggle loading</Button>
      {isLoading ? (
        <AccordionSkeleton open count={3} />
      ) : (
        <Accordion>
          <AccordionItem title="Panel A" open>
            Panel A
          </AccordionItem>
          <AccordionItem title="Panel B">Panel B</AccordionItem>
          <AccordionItem title="Panel C">Panel C</AccordionItem>
        </Accordion>
      )}
    </>
  );
}

render(<Example />);
`;
