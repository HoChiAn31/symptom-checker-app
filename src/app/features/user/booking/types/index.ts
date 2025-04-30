export interface BookingForm {
	phone: string;
	email: string;
	name: string;
	address: string;
	appointmentDate: Date | null;
	appointmentTime: Date | null;
	notes: string;
}
