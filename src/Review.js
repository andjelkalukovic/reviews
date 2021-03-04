import React, { useState } from 'react';
import people from './data';
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'
import { BsCaretLeft, BsCaretRight } from 'react-icons/bs'
import { ImQuotesRight } from "react-icons/im";

const Review = () => {
    const [index, setIndex] = useState(0);
    const { name, job, image, text } = people[index];

    const checkNumber = (number) => {
        if (number > people.length - 1) {
            return 0
        }
        if (number < 0) {
            return people.length - 1
        }
        return number;
    }

    const nextPerson = () => {
        setIndex((index) => {
            let newIndex = index + 1;
            return checkNumber(newIndex);
        });
    }

    const prevPerson = () => {
        setIndex((index) => {
            let newIndex = index - 1;
            return checkNumber(newIndex);
        });
    }

    const randomPerson = () => {
        let randomNumber = Math.floor(Math.random() * people.length);
        if (randomNumber === index) {
            randomNumber = index + 1
        }
        setIndex(checkNumber(randomNumber))
    }

    return (
        <article className='row justify-content-center'>
            <div className='one-review py-4 col-lg-10 justify-center'>
                <div>
                    <div>
                        <i className='qoutes'><ImQuotesRight /></i>
                    </div>
                    <Image src={image} alt={name} roundedCircle />
                </div>

                <div>
                    <h4 className='text-capitalize font-weight-bolder'>{name}</h4>
                    <p className='text-uppercase text-info'>{job}</p>
                    <p className='text-center px-5'>{text}</p>
                </div>

                <div>
                    {/* eslint-disable-next-line */}
                    <a onClick={prevPerson} className='icon px-2'><BsCaretLeft /></a>
                    {/* eslint-disable-next-line */}
                    <a onClick={nextPerson} className='icon px-2'><BsCaretRight /></a>
                </div>
                <Button variant="outline-info" onClick={randomPerson} className='mt-3'>Surprise me</Button>{' '}
            </div>
        </article>
    )
}

export default Review;