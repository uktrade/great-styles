import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import { Modal } from './Modal'

export const ModalTour = ({
  slides,
  isModalOpen,
  onModalComplete,
  onModalClose,
  children,
}) => {
  const [current, setCurrent] = useState(2)
  const [modalOpen, setModalOpen] = useState(isModalOpen)
  const length = slides.length - 1

  const onHandleClose = () => {
    setModalOpen(false)
    onModalClose()
  }

  const onHandlePrev = () => {
    if (calcProgress() !== 0) {
      setCurrent(current - 1)
    } else {
      return false
    }
  }

  const onHandleNext = () => {
    if (calcProgress() !== 100) {
      setCurrent(current + 1)
    } else {
      setModalOpen(false)
      onModalComplete()
    }
  }

  const calcProgress = () => {
    return (current / length) * 100
  }

  return (
    <>
      {children}
      {slides.length !== 0 && (
        <Modal
          isOpen={modalOpen}
          title={slides[current].title}
          body={slides[current].body}
          image={slides[current].image}
          progressPercentage={calcProgress()}
          closeClick={onHandleClose}
          primaryButtonClick={onHandleNext}
          primaryButtonLabel={calcProgress() !== 100 ? 'Next' : 'Finished'}
          secondaryButtonClick={onHandlePrev}
          secondaryButtonLabel={`Previous`}
          secondaryButtonDisable={calcProgress() === 0 ? true : false}
        />
      )}
    </>
  )
}

ModalTour.propTypes = {
  isModalOpen: PropTypes.bool.isRequired,
  slides: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      body: PropTypes.string,
    }).isRequired
  ).isRequired,
  onModalComplete: PropTypes.func.isRequired,
  onModalClose: PropTypes.func.isRequired,
  children: PropTypes.node,
}
ModalTour.defaultProps = {
  isModalOpen: false,
  slides: [],
  onModalComplete: () => void 0,
  onModalClose: () => void 0,
  children: null,
}
