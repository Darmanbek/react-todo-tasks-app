import { useAppDispatch, useAppSelector } from "src/hooks/useAppStore"
import { type RootState, setModal, toggleModal } from "../store"

export const useModal = () => {
	const dispatch = useAppDispatch()
	const isOpen = useAppSelector((state: RootState) => state.modal.isOpen)

	return {
		isOpen,
		toggleModal: () => dispatch(toggleModal()),
		setModal: (open: boolean) => dispatch(setModal(open))
	}
}
