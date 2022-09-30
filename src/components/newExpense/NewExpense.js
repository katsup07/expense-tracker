import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

function NewExpense({ onSaveExpenseData }) {
	const [isEditing, setIsEditing] = useState(false);

	return (
		<div className='new-expense'>
			{!isEditing && (   // startEditingHandler
				<button onClick={() => setIsEditing(true)}>Add New Expense</button>
			)}

			{isEditing && (
				<ExpenseForm // stopEditingHandler
					closeForm={() => setIsEditing(false)}
					onSaveExpenseData={onSaveExpenseData}
				/>
			)}
		</div>
	);
}

export default NewExpense;
