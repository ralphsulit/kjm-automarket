// Custom Imports
import { CarProps } from "@/types";

interface CarDetailsProps {
  isOpen: boolean;
  closeModal: () => void;
  car: CarProps;
}

const CarDetails = ({ car, isOpen, closeModal }: CarDetailsProps) => {
  return (
    <div>CardDetails</div>
  )
}

export default CarDetails