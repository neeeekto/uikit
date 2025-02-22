import React from 'react';

import {Eye, EyeSlash, Key} from '@gravity-ui/icons';
import block from 'bem-cn-lite';

import {Button} from '../../Button';
import {Checkbox} from '../../Checkbox';
import {Icon} from '../../Icon';
import {TextInput} from '../TextInput';
import type {TextInputProps} from '../types';

import './TextInputShowcase.scss';

const b = block('text-input-showcase');

const LABEL = 'Label:';
const LONG_LABEL = 'Very very long label is limited by 50% width of the input control size';

const EyeButton = (props: {
    size: TextInputProps['size'];
    opened?: boolean;
    disabled?: boolean;
    onClick: () => void;
}) => {
    const {size, disabled, opened, onClick} = props;

    return (
        <Button size={size} view="flat" disabled={disabled} onClick={onClick}>
            <Icon data={opened ? Eye : EyeSlash} />
        </Button>
    );
};

export function TextInputShowcase() {
    const [value, setValue] = React.useState('');
    const [isErrorMessageVisible, setErrorMessageVisibility] = React.useState(false);
    const [hideValue, setHideValue] = React.useState(false);
    const additionalContentExmpleInputType = hideValue ? 'password' : undefined;

    const textInputProps: TextInputProps = {
        className: b('input'),
        onUpdate: setValue,
        value,
    };

    const textAreaProps: TextInputProps = {
        multiline: true,
        className: b('text-area'),
        onUpdate: setValue,
        value,
    };

    const handleEyeButtonClick = () => setHideValue(!hideValue);

    return (
        <div className={b()}>
            <div className={b('text-input-examples')}>
                <h2 className={b('title')}>TextInput</h2>

                <div className={'size-examples'}>
                    <h3 className={b('section-header')}>Sizes:</h3>

                    <TextInput {...textInputProps} size="s" placeholder="s" />
                    <TextInput {...textInputProps} placeholder="m" />
                    <TextInput {...textInputProps} size="l" placeholder="l" />
                    <TextInput {...textInputProps} size="xl" placeholder="xl" />
                </div>

                <div className={b('state-examples')}>
                    <h3 className={b('section-header')}>States:</h3>

                    <div className={b('row')}>
                        <TextInput
                            {...textInputProps}
                            placeholder="error with message"
                            error={isErrorMessageVisible ? 'It happened a validation error' : true}
                        />
                        <Checkbox
                            onUpdate={setErrorMessageVisibility}
                            checked={isErrorMessageVisible}
                        />
                    </div>
                    <TextInput {...textInputProps} placeholder="disabled" disabled />
                    <TextInput {...textInputProps} placeholder="clear" hasClear />
                    <TextInput
                        {...textInputProps}
                        placeholder="default value"
                        value={undefined}
                        defaultValue="defaultValue"
                    />
                </div>
            </div>

            <div className={b('text-input-label-examples')}>
                <h2 className={b('title')}>TextInput (label)</h2>

                <div className={'size-examples'}>
                    <h3 className={b('section-header')}>Sizes:</h3>

                    <TextInput {...textInputProps} size="s" placeholder="s" label={LABEL} />
                    <TextInput {...textInputProps} placeholder="m" label={LABEL} />
                    <TextInput {...textInputProps} size="l" placeholder="l" label={LABEL} />
                    <TextInput {...textInputProps} size="xl" placeholder="xl" label={LABEL} />
                </div>

                <div className={b('state-examples')}>
                    <h3 className={b('section-header')}>States:</h3>

                    <div className={b('row')}>
                        <TextInput
                            {...textInputProps}
                            placeholder="error with message"
                            label={LABEL}
                            error={isErrorMessageVisible ? 'It happened a validation error' : true}
                        />
                        <Checkbox
                            onUpdate={setErrorMessageVisibility}
                            checked={isErrorMessageVisible}
                        />
                    </div>
                    <TextInput {...textInputProps} placeholder="disabled" label={LABEL} disabled />
                    <TextInput {...textInputProps} placeholder="clear" label={LABEL} hasClear />
                    <TextInput
                        {...textInputProps}
                        placeholder="default value"
                        label={LABEL}
                        value={undefined}
                        defaultValue="defaultValue"
                    />
                    <TextInput
                        {...textInputProps}
                        placeholder="default value"
                        label={LONG_LABEL}
                        value={undefined}
                        defaultValue="defaultValue"
                    />
                </div>
            </div>

            <div className={b('text-input-examples')}>
                <h2 className={b('title')}>TextInput (with additional content)</h2>

                <div className={'size-examples'}>
                    <h3 className={b('section-header')}>Sizes:</h3>

                    <TextInput
                        {...textInputProps}
                        size="s"
                        placeholder="s"
                        type={additionalContentExmpleInputType}
                        leftContent={<Icon data={Key} />}
                        rightContent={
                            <EyeButton size="s" opened={hideValue} onClick={handleEyeButtonClick} />
                        }
                    />
                    <TextInput
                        {...textInputProps}
                        placeholder="m"
                        type={additionalContentExmpleInputType}
                        leftContent={<Icon data={Key} />}
                        rightContent={
                            <EyeButton size="s" opened={hideValue} onClick={handleEyeButtonClick} />
                        }
                    />
                    <TextInput
                        {...textInputProps}
                        size="l"
                        placeholder="l"
                        type={additionalContentExmpleInputType}
                        leftContent={<Icon data={Key} />}
                        rightContent={
                            <EyeButton size="m" opened={hideValue} onClick={handleEyeButtonClick} />
                        }
                    />
                    <TextInput
                        {...textInputProps}
                        size="xl"
                        placeholder="xl"
                        type={additionalContentExmpleInputType}
                        label={LABEL}
                        leftContent={<Icon data={Key} />}
                        rightContent={
                            <EyeButton size="l" opened={hideValue} onClick={handleEyeButtonClick} />
                        }
                    />
                </div>

                <div className={b('state-examples')}>
                    <h3 className={b('section-header')}>States:</h3>

                    <div className={b('row')}>
                        <TextInput
                            {...textInputProps}
                            placeholder="error with message"
                            error={isErrorMessageVisible ? 'It happened a validation error' : true}
                            type={additionalContentExmpleInputType}
                            leftContent={<Icon data={Key} />}
                            rightContent={
                                <EyeButton
                                    size="s"
                                    opened={hideValue}
                                    onClick={handleEyeButtonClick}
                                />
                            }
                        />
                        <Checkbox
                            onUpdate={setErrorMessageVisibility}
                            checked={isErrorMessageVisible}
                        />
                    </div>
                    <TextInput
                        {...textInputProps}
                        placeholder="disabled"
                        type={additionalContentExmpleInputType}
                        leftContent={<Icon data={Key} />}
                        rightContent={
                            <EyeButton
                                size="s"
                                opened={hideValue}
                                disabled
                                onClick={handleEyeButtonClick}
                            />
                        }
                        disabled
                    />
                    <TextInput
                        {...textInputProps}
                        placeholder="clear"
                        type={additionalContentExmpleInputType}
                        label={LABEL}
                        leftContent={<Icon data={Key} />}
                        rightContent={
                            <EyeButton size="s" opened={hideValue} onClick={handleEyeButtonClick} />
                        }
                        hasClear
                    />
                    <TextInput
                        {...textInputProps}
                        placeholder="default value"
                        value={undefined}
                        defaultValue="defaultValue"
                        type={additionalContentExmpleInputType}
                        label={LONG_LABEL}
                        leftContent={<Icon data={Key} />}
                        rightContent={
                            <EyeButton size="s" opened={hideValue} onClick={handleEyeButtonClick} />
                        }
                    />
                </div>
            </div>

            <div className={b('text-area-examples')}>
                <h2 className={b('title')}>TextInput (multiline)</h2>

                <div className={b('size-examples')}>
                    <h3 className={b('section-header')}>Sizes:</h3>

                    <TextInput {...textAreaProps} placeholder="dynamic height" />
                    <TextInput
                        {...textAreaProps}
                        placeholder="dynamic height & maxRows = 4"
                        maxRows={4}
                    />
                    <TextInput
                        {...textAreaProps}
                        placeholder="dynamic height & minRows = 2 & maxRows = 4 & clear"
                        minRows={2}
                        maxRows={4}
                        hasClear
                    />
                </div>

                <div className={b('state-examples')}>
                    <h3 className={b('section-header')}>States:</h3>

                    <TextInput {...textAreaProps} placeholder="dynamic height & clear" hasClear />
                    <div className={b('row')}>
                        <TextInput
                            {...textAreaProps}
                            placeholder="error with message"
                            error={isErrorMessageVisible ? 'It happened a validation error' : true}
                        />
                        <Checkbox
                            onUpdate={setErrorMessageVisibility}
                            checked={isErrorMessageVisible}
                        />
                    </div>
                    <TextInput {...textAreaProps} placeholder="disabled" disabled rows={2} />
                    <TextInput
                        {...textAreaProps}
                        placeholder="rows = 4 & clear"
                        hasClear
                        rows={4}
                    />
                    <TextInput
                        {...textAreaProps}
                        placeholder="resize vertical"
                        controlProps={{style: {resize: 'vertical'}}}
                        rows={4}
                    />
                </div>
            </div>
        </div>
    );
}
