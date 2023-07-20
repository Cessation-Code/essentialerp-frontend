import React, { useState } from 'react';
import Modal from '../../../components/layouts/modal_layout';

const ViewSalesModal = ({ onClose, selectedRowData }) => {

    // const [name, setName] = useState(selectedRowData.name);
    // const [amount, setAmount] = useState(selectedRowData.date);
    // const [description, setDescription] = useState(selectedRowData.category);

    console.log(selectedRowData)

    const closeModal = () => {
        onClose();
    };

    return (
        <Modal header="Sale Detail View">
            <form>

                <div className="flex flex-row justify-end gap-3">
                    <button type="button" className="bg-gray-500 rounded text-black py-1 px-4 mt-4" onClick={closeModal}>
                        Cancel
                    </button>
                </div>
            </form>

        </Modal>
    )



}

export default ViewSalesModal;