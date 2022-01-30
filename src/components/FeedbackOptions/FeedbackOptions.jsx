import React from 'react';
import PropTypes from "prop-types";
import { FeedbackOptioButtons, FeedbackButton } from "./FeedbackOptions.styled";

const FeedbackOptions = ({ options, onClick }) => {
    return (
            <FeedbackOptioButtons>
                {options.map((option) => (
                    <li key={option}>
                        <FeedbackButton
                            onClick={onClick}
                            type="button"
                            name={option}
                        >
                            {option}
                        </FeedbackButton>
                    </li>
                ))}
            </FeedbackOptioButtons>
    )
};

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onClick: PropTypes.func.isRequired,
};

export default FeedbackOptions;