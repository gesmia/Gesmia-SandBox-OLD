'use client';

import CardForm, { useMainForm } from './(components)/card-form/CardForm';
import { createRegisterTry } from '@/firebase/actions/create-register-try';
import { Header } from '@/stories/header/Header';
import { getRandomNumber } from './(lib)/utils';
import { useEffect, useRef, useState } from 'react';

import PersonalForm from './(components)/personal-form/PersonalForm';
import Stepper from './(components)/stepper/Stepper';
import Modal from './(components)/modal/Modal';
import './page.css';

export default function CheckoutPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [contenHeight, setContenHeight] = useState(0);
  const [processing, setProcessing] = useState(false);
  const [modalShown, setModalShown] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const mainForm = useMainForm();

  useEffect(() => {
    if (!contentRef.current) return;
    const resizeObserver = new ResizeObserver((entries) => {
      for (let { target } of entries) {
        setContenHeight(target.clientHeight);
      }
    });

    resizeObserver.observe(contentRef.current);
    return () => resizeObserver.disconnect();
  }, []);

  async function onSubmit() {
    if (mainForm.hasErrors()) return;

    setProcessing(true);
    setModalShown(true);
    setTimeout(() => setProcessing(false),
      getRandomNumber(5000, 10000) // 5s >=< 10s
    );

    await createRegisterTry({
      email: mainForm.email.value,
      cardProvider: mainForm.cardProvider!.name,
      cardHolder: mainForm.card.holder.value,
      phone: mainForm.phone.value,
    });
  }

  const validPersonalInfo = (
    !mainForm.email.errors &&
    !mainForm.phone.errors &&
    !mainForm.fullName.errors
  )

  return (
    <>
      <Modal
        processing={processing}
        setShown={setModalShown}
        shown={modalShown}
      />
      <Header hideWaitingList />

      <div className='container'>
        <div className='checkout-card'>
          <div className='checkout-card__content' ref={contentRef}>
            <Stepper
              currentStep={currentStep}
              steps={[
                {
                  label: 'Datos de Contacto',
                  component: (
                    <>
                      <div className='step-form'>
                        <PersonalForm 
                          fullName={mainForm.fullName}
                          email={mainForm.email}
                          phone={mainForm.phone}
                        />
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <span></span>
                        <button className='btn btn--primary' 
                          onClick={() => validPersonalInfo && setCurrentStep(1)}
                          disabled={!validPersonalInfo}
                        >
                          Siguiente
                        </button>
                      </div>
                    </>
                  )
                },
                {
                  label: 'Datos de Pago',
                  component: (
                    <>
                      <div className='step-form'>
                        <CardForm {...mainForm} />
                        <p className='simple-text'>
                          ¿Por qué pedimos estos datos? <a href="#">miralo aquí</a>.
                        </p>

                        <label htmlFor="termsAndConditions" className='simple-text simple-checkbox'>
                          <input id="termsAndConditions" type="checkbox" />
                          Acepto los Terminos y Condiciones.
                        </label>
                      </div>

                      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <button className='btn' onClick={() => setCurrentStep(0)}>
                          Atras
                        </button>
                        <button className='btn btn--primary' onClick={() => setCurrentStep(1)}>
                          Procesar
                        </button>
                      </div>
                    </>
                  )
                },
              ]}
            />
          </div>
          <div className='checkout-card__image' style={{ height: `${contenHeight}px`}}>
            <img src='/head/report_view.png' height={300}/>
          </div>
        </div>
      </div>

    </>
  );
}
