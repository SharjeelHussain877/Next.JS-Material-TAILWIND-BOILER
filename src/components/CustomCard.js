import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Chip,
} from "@material-tailwind/react";
import { useRouter } from "next/navigation";

export default function CustomCard({ obj, index }) {
    const router = useRouter()
    function navigate (index) {
        console.log(index)
        router.push(`/dashboard/module?course=${obj?.course}`)
    }
    return (
    <Card className="min-w-40 cursor-pointer hover:bg-[#F3F3F3] shadow-lg" onClick={() => navigate(index)}>
      <CardBody>
        {obj?.icon(48)}
        <Typography variant="h5" color="blue-gray" className="mb-2 mt-2">
          {obj?.course}
        </Typography>
        <Typography>{obj?.description}</Typography>
      </CardBody>
      <CardFooter className="pt-0 flex ">
        <div className="max-w-[100%]">
          <Chip
            value={obj?.status}
            className={`bg-[#f9c285] text-[#e47d0a] rounded-2xl ${
              obj?.status === "completed" && "bg-[#95ffa6] text-[#009418]"
            }`}
          />
        </div>
      </CardFooter>
    </Card>
  );
}
