import { CModal, CModalHeader, CModalBody, CModalFooter, CButton } from '@coreui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBan, faRedoAlt, faArrowLeft } from '@fortawesome/free-solid-svg-icons'

export default function ModalChangeStatus(props) {
   const { show, close, dataStatus, changeStatus, loading } = props
   const title = (dataStatus.status === '1') ? 'Desactivar Registro' : 'Activar Registro'
   const body = (dataStatus.status === '1') ? '¿Confirma Desactivar este registro?' : '¿Confirmar Activar este registro?'

   const change = () => {
      changeStatus()
      close()
   }

   return (
      <CModal show={show} onClose={close}>
         <CModalHeader>
            <p>{title}</p>
         </CModalHeader>
         <CModalBody>
            <p>{body}</p>
         </CModalBody>
         <CModalFooter>
            <div className="d-flex justify-content-end">
               <CButton 
                  size='md' 
                  color='danger' 
                  className='mr-2' 
                  onClick={close} 
                  disabled={loading}
               >
                  <FontAwesomeIcon icon={faArrowLeft} />{' '}
                  Cancel
               </CButton>
               <CButton 
                  size='md' 
                  color={(dataStatus.status === '1') ? 'success' : 'info'} 
                  className='' 
                  onClick={change} 
                  disabled={loading}
               >
                  <FontAwesomeIcon icon={(dataStatus.status === '1') ? faBan : faRedoAlt} />{' '}
                  {(dataStatus.status === '1') ? 'Deactivate' : 'Activate'}
               </CButton>
            </div>
         </CModalFooter>
      </CModal>
   );
}