import React from 'react';

import 'tippy.js/dist/tippy.css';
import Tooltip from '@tippyjs/react';

import { BaseColors, HorizontalPositionTypes, ImportanceTypes, SizeTypes, classNames, spacing } from 'lib';
import { Color, MarginTop } from '../../../lib';
import {
    buttonProportions,
    colors,
    iconSizes,
    shape,
} from './styles';

export interface ButtonProps {
    text: string,
    Icon?: React.ElementType,
    iconPosition?: string,
    tooltip?: string,
    size?: string,
    color?: Color,
    importance?: string,
    handleClick?: { (): void },
    marginTop?: MarginTop,
}

const Button = ({
    text,
    Icon,
    iconPosition = HorizontalPositionTypes.Left,
    handleClick,
    tooltip,
    size = SizeTypes.SM,
    color = BaseColors.Blue,
    importance = ImportanceTypes.Primary,
    marginTop = 'mt-0',
}: ButtonProps) => {
    return(
        <span className={ classNames(marginTop) }>
            <Tooltip content={ tooltip } className={ tooltip ? '' : 'hidden' }>
                <button
                    type="button"
                    onClick={ handleClick }
                    className={ classNames(
                        'flex-shrink-0 inline-flex items-center group font-medium',
                        'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-transparent',
                        buttonProportions[size]?.paddingLeft,
                        buttonProportions[size]?.paddingRight,
                        buttonProportions[size]?.paddingTop,
                        buttonProportions[size]?.paddingBottom,
                        buttonProportions[size]?.fontSize,
                        shape.border,
                        shape.rounded,
                        shape.shadow,
                        colors[color][importance].bgColor,
                        colors[color][importance].borderColor,
                        colors[color][importance].focusRingColor,
                        colors[color][importance].hoverBgColor,
                        colors[color][importance].hoverBorderColor,
                        colors[color][importance].textColor,
                    ) }
                >
                    { Icon && (iconPosition !== HorizontalPositionTypes.Right) ? ( // ensures that icon is rendered if iconPosition is misspelled
                        <Icon
                            className={classNames(
                                spacing.twoXs.negativeMarginLeft,
                                spacing.xs.marginRight,
                                iconSizes[size]?.height,
                                iconSizes[size]?.width,
                            )}
                            aria-hidden="true"
                        />
                    ) : null }
                    <p className="whitespace-nowrap">
                        { text }
                    </p>
                    { Icon && (iconPosition === HorizontalPositionTypes.Right) ? (
                        <Icon
                            className={classNames(
                                spacing.twoXs.negativeMarginRight,
                                spacing.xs.marginLeft,
                                iconSizes[size]?.height,
                                iconSizes[size]?.width,
                            )}
                            aria-hidden="true"
                        />
                    ) : null }
                </button>
            </Tooltip>
        </span>
    );
};

export default Button;