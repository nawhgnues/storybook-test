import { AlertDialog } from "@/components/AlertDialog";
import { Button } from "@/components/Button";

function App() {
  return (
    <div className="h-screen flex justify-center items-center gap-10">
      <Button>More</Button>
      <Button variant="register" shape="full" size="large" weight="medium">
        Register
      </Button>
      <AlertDialog />
    </div>
  );
}

export default App;
