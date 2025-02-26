import { Button, Checkbox, DatePicker, Form, type FormProps, Input, Modal, Select, Tag } from "antd"
import dayjs from "dayjs"
import { type FC } from "react"
import { useAppDispatch, useAppSelector } from "src/hooks"
import type { ITaskState } from "src/model/task"
import { handleModal } from "src/store/modal/modal.slice"
import { addTask } from "src/store/tasks/tasks.slice"
import { catalogData } from "./catalog.data"

const { TextArea } = Input

const ModalTask: FC = () => {
	const { open } = useAppSelector((state) => state.modal)
	const dispatch = useAppDispatch()
	const [form] = Form.useForm<ITaskState>()

	const onCloseModal = () => {
		form.resetFields()
		dispatch(handleModal())
	}

	const onFinish: FormProps["onFinish"] = (values) => {
		if (values.date) {
			values.date = dayjs(values.date).format("YYYY-MM-DD")
		}
		dispatch(addTask(values))
		onCloseModal()
	}

	return (
		<Modal
			mask={true}
			title={"Добавить задачу"}
			centered={true}
			open={open}
			onCancel={onCloseModal}
			footer={null}
		>
			<Form
				form={form}
				onFinish={onFinish}
				layout={"vertical"}
				autoComplete={"off"}
				requiredMark={(labelNode, { required }) => (
					<>
						<Tag color={required ? "red-inverse" : "orange-inverse"}>
							{required ? "Важно" : "Неважно"}
						</Tag>
						{labelNode}
					</>
				)}
			>
				<Form.Item<ITaskState>
					label={"Заголовок"}
					name={"title"}
					rules={[
						{
							required: true,
							message: "Пожалуйста, заполните заголовок!"
						}
					]}
				>
					<Input placeholder={"например, исследование для теста"} />
				</Form.Item>
				<Form.Item<ITaskState>
					label={"Дата"}
					name={"date"}
					rules={[
						{
							required: true,
							message: "Пожалуйста, заполните дату!"
						}
					]}
				>
					<DatePicker
						placeholder={"Выберите дату"}
						style={{
							width: "100%"
						}}
					/>
				</Form.Item>
				<Form.Item<ITaskState>
					label={<span className={"text-light-modal-text dark:text-dark-text"}>Описание</span>}
					name={"description"}
					rules={[
						{
							required: true,
							message: "Пожалуйста, заполните описание!"
						}
					]}
				>
					<TextArea placeholder={"например, описание исследования для теста"} />
				</Form.Item>
				<Form.Item<ITaskState>
					label={"Каталог"}
					name={"dir"}
					rules={[
						{
							required: true,
							message: "Пожалуйста, заполните каталог!"
						}
					]}
				>
					<Select placeholder={"Выберите каталог"} options={catalogData} />
				</Form.Item>
				<Form.Item<ITaskState> name={"important"} valuePropName={"checked"} initialValue={false}>
					<Checkbox>Отметить как важное</Checkbox>
				</Form.Item>
				<Form.Item<ITaskState> name={"completed"} valuePropName={"checked"} initialValue={false}>
					<Checkbox>Отметить как выполненное</Checkbox>
				</Form.Item>
				<Form.Item>
					<Button block={true} size={"large"} type={"primary"} htmlType={"submit"}>
						Добавить задачу
					</Button>
				</Form.Item>
			</Form>
		</Modal>
	)
}

export default ModalTask
