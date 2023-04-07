import Form from "../Components/Form";
import Message from "../Components/Message";
import { useGlobalState } from "../Context/context";

const Contact = () => {
	const { state } = useGlobalState();

	return (
		<section>
			<h1>Want to know more?</h1>
			<p>Send us your questions and we will contact you</p>
			<Form />
			{state?.contact?.length !== 0 ? (
				<Message>
					**Thank you _{state?.contact?.fullname}_, we will contact you as soon
					as possible via email**
				</Message>
			) : null}
		</section>
	);
};

export default Contact;
