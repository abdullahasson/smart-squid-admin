import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Input } from "@/components/ui/input";

export default function ReadOnlyDatePicker() {
  const today = new Date(); // Set the date to today or any specific date
  const formattedDate = format(today, "MMMM dd, yyyy"); // Format the date

  return (
    <Popover>
      <PopoverTrigger asChild>
        {/* Disable the button to prevent the calendar from opening */}
        <Button variant="outline" disabled className="text-center justify-start text-left font-normal bg-white rounded-md">
          <Input
            type="text"
            value={formattedDate}
            readOnly // Make the input read-only
            className="border-none bg-transparent pointer-events-none text-center" // Disable pointer events
          />
        </Button>
      </PopoverTrigger>
      {/* Empty PopoverContent to prevent the calendar from showing */}
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar mode="single" selected={today} onSelect={() => {}} />
      </PopoverContent>
    </Popover>
  );
}