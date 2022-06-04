import {useNavigate} from "react-router-dom";

export default function NotFound() {
	const navigate = useNavigate();
	return (
		<div>
			<div>
				<button onClick={()=> navigate(-1)}>
					{"< Voltar"}
				</button>
			</div>
		</div>
	);
}