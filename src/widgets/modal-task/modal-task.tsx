import { Button, Checkbox, DatePicker, Form, type FormProps, Input, Modal, Select, Tag } from "antd"
import dayjs from "dayjs"
import { type FC, useEffect } from "react"
import { catalogData } from "src/shared/data/catalog.data"
import type { Task, TaskChange } from "src/shared/model/task"
import { toggleModal } from "src/shared/store/actions"
import { useAddTaskMutation } from "src/shared/store/endpoints"
import { useAppDispatch, useAppSelector } from "src/shared/store/hooks"

const ModalTask: FC = () => {
	const { isOpen } = useAppSelector((state) => state.modal)
	const dispatch = useAppDispatch()
	const [form] = Form.useForm<TaskChange>()

	const [addTask, { isLoading, status, isSuccess }] = useAddTaskMutation()

	const onCloseModal = () => {
		form.resetFields()
		if (isOpen) dispatch(toggleModal())
	}

	const onFinish: FormProps<TaskChange>["onFinish"] = (values) => {
		if (values.date) {
			values.date = dayjs(values.date).format("YYYY-MM-DD")
		}
		addTask(values)
		onCloseModal()
	}

	useEffect(() => {
		if (isSuccess && status === "fulfilled") {
			onCloseModal()
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isSuccess, status])
	return (
		<Modal
			mask={true}
			title={"Добавить задачу"}
			centered={true}
			open={isOpen}
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
				<Form.Item<Task>
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
				<Form.Item<Task>
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
				<Form.Item<Task>
					label={<span className={"text-light-modal-text dark:text-dark-text"}>Описание</span>}
					name={"description"}
					rules={[
						{
							required: true,
							message: "Пожалуйста, заполните описание!"
						}
					]}
				>
					<Input.TextArea placeholder={"например, описание исследования для теста"} />
				</Form.Item>
				<Form.Item<Task>
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
				<Form.Item<Task> name={"important"} valuePropName={"checked"} initialValue={false}>
					<Checkbox>Отметить как важное</Checkbox>
				</Form.Item>
				<Form.Item<Task> name={"completed"} valuePropName={"checked"} initialValue={false}>
					<Checkbox>Отметить как выполненное</Checkbox>
				</Form.Item>
				<Form.Item>
					<Button
						loading={isLoading}
						block={true}
						size={"large"}
						type={"primary"}
						htmlType={"submit"}
					>
						Добавить задачу
					</Button>
				</Form.Item>
			</Form>
		</Modal>
	)
}

export { ModalTask }
