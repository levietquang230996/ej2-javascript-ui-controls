import { Button, IconPosition } from '@syncfusion/ej2-buttons';import { EventHandler, Property, INotifyPropertyChanged, NotifyPropertyChanges, Animation, Effect, attributes } from '@syncfusion/ej2-base';import { EmitType, Event, BaseEventArgs, remove, removeClass } from '@syncfusion/ej2-base';import { createSpinner, showSpinner, hideSpinner } from '@syncfusion/ej2-popups';
import {SpinSettings,AnimationSettings,ProgressEventArgs} from "./progress-button";

/**
 * Interface for a class ProgressButton
 */
export interface ProgressButtonModel {

    /**
     * Enables or disables the background filler UI in the progress button.
     * @default false
     */
    enableProgress?: boolean;

    /**
     * Specifies the duration of progression in the progress button.
     * @default 2000
     */
    duration?: number;

    /**
     * Positions an icon in the progress button. The possible values are:
     * * Left: The icon will be positioned to the left of the text content.
     * * Right: The icon will be positioned to the right of the text content.
     * * Top: The icon will be positioned at the top of the text content.
     * * Bottom: The icon will be positioned at the bottom of the text content.
     * @default "Left"
     */
    iconPosition?: IconPosition;

    /**
     * Defines class/multiple classes separated by a space for the progress button that is used to include an icon.
     * Progress button can also include font icon and sprite image.
     * @default ""
     */
    iconCss?: string;

    /**
     * Enables or disables the progress button.
     * @default false.
     */
    disabled?: boolean;

    /**
     * Allows the appearance of the progress button to be enhanced and visually appealing when set to `true`.
     * @default false
     */
    isPrimary?: boolean;

    /**
     * Specifies the root CSS class of the progress button that allows customization of component’s appearance.
     * The progress button types, styles, and size can be achieved by using this property.
     * @default ""
     */
    cssClass?: string;

    /**
     * Defines the text `content` of the progress button element.
     * @default ""
     */
    content?: string;

    /**
     * Makes the progress button toggle, when set to `true`. When you click it, the state changes from normal to active.
     * @default false
     */
    isToggle?: boolean;

    /**
     * Specifies a spinner and its related properties.
     */
    spinSettings?: SpinSettings;

    /**
     * Specifies the animation settings.
     */
    animationSettings?: AnimationSettings;

    /**
     * Triggers once the component rendering is completed.
     * @event
     */
    created?: EmitType<Event>;

    /**
     * Triggers when the progress starts.
     * @event
     */
    begin?: EmitType<ProgressEventArgs>;

    /**
     * Triggers in specified intervals.
     * @event
     */
    progress?: EmitType<ProgressEventArgs>;

    /**
     * Triggers when the progress is completed.
     * @event
     */
    end?: EmitType<ProgressEventArgs>;

    /**
     * Triggers when the progress is incomplete.
     * @event
     */
    fail?: EmitType<Event>;

}