import type { CheckboxProps, FormProps } from "antd"
import { Button, Checkbox, DatePicker, Form, Input, Modal, Select } from "antd"
import { type FC, useState } from "react"
import { useAppDispatch, useAppSelector } from "src/hooks"
import type { ITaskState } from "src/model/task"
import { handleModal } from "src/store/modal/modal.slice"
import { addTask } from "src/store/tasks/tasks.slice"
import { catalogItems } from "./catalogItems"

const { TextArea } = Input

const ModalTask: FC = () => {
	const { open } = useAppSelector((state) => state.modal)
	const dispatch = useAppDispatch()
	const [form] = Form.useForm<ITaskState>()
	const [checkImportant, setCheckImportant] = useState(false)
	const [checkCompleted, setCheckCompleted] = useState(false)

	const handleCancel = () => {
		dispatch(handleModal())
	}

	const onChangeCheckBox: CheckboxProps["onChange"] = (e) => {
		if (e.target.id === "important") {
			setCheckImportant(e.target.checked)
		} else {
			setCheckCompleted(e.target.checked)
		}
	}

	const onFinish: FormProps["onFinish"] = (values) => {
		let dd = values.date["$D"]
		dd = dd < 10 ? "0" + dd : dd
		let mm = values.date["$M"] + 1
		mm = mm < 10 ? "0" + mm : mm
		const yyyy = values.date["$y"]
		values.date = `${yyyy}-${mm}-${dd}`
		values.important = checkImportant
		values.completed = checkCompleted
		form.resetFields()
		dispatch(addTask(values))
		handleCancel()
	}

	return (
		<Modal
			mask={true}
			title={<span className={"text-light-modal-text dark:text-dark-text"}>Добавить задачу</span>}
			centered={true}
			open={open}
			onCancel={handleCancel}
			footer={null}
		>
			<Form form={form} onFinish={onFinish} layout={"vertical"} autoComplete={"off"}>
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
					<Input size={"large"} placeholder={"например, исследование для теста"} />
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
						format={"YYYY-MM-DD"}
						placeholder={"Выберите дату"}
						className={"w-full"}
						size={"large"}
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
					<TextArea size={"large"} placeholder={"например, описание исследования для теста"} />
				</Form.Item>
				<Form.Item<ITaskState>
					label={<span className={"text-light-modal-text dark:text-dark-text"}>Каталог</span>}
					name={"dir"}
					rules={[
						{
							required: true,
							message: "Пожалуйста, заполните каталог!"
						}
					]}
				>
					<Select size={"large"} placeholder={"Выберите каталог"} options={catalogItems} />
				</Form.Item>
				<Form.Item<ITaskState> name={"important"} valuePropName={"checked"}>
					<Checkbox value={checkImportant} onChange={onChangeCheckBox}>
						<span className={"text-light-modal-text dark:text-dark-text"}>Отметить как важное</span>
					</Checkbox>
				</Form.Item>
				<Form.Item<ITaskState> name={"completed"} valuePropName={"checked"}>
					<Checkbox value={checkCompleted} onChange={onChangeCheckBox}>
						<span className={"text-light-modal-text dark:text-dark-text"}>
							Отметить как выполненное
						</span>
					</Checkbox>
				</Form.Item>
				<Form.Item>
					<Button type={"primary"} htmlType={"submit"} className={"w-full"}>
						Добавить задачу
					</Button>
				</Form.Item>
			</Form>
		</Modal>
	)
}

export default ModalTask
