import { Dropzone } from '.';

export default function Composition() {
  return (
    <>
      <Dropzone.Root>
        <Dropzone.Instruction />
      </Dropzone.Root>
    </>
  );
}
