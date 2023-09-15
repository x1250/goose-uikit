/// <reference types="react" />
/// <reference types="react" />
declare const StyledTh: import("styled-components").IStyledComponent<"web", {
    ref?: import("react").LegacyRef<HTMLTableHeaderCellElement> | undefined;
    key?: import("react").Key | null | undefined;
    align?: "center" | "left" | "right" | "justify" | "char" | undefined;
    colSpan?: number | undefined;
    headers?: string | undefined;
    rowSpan?: number | undefined;
    scope?: string | undefined;
    abbr?: string | undefined;
    defaultChecked?: boolean | undefined;
    defaultValue?: string | number | readonly string[] | undefined;
    suppressContentEditableWarning?: boolean | undefined;
    suppressHydrationWarning?: boolean | undefined;
    accessKey?: string | undefined;
    autoFocus?: boolean | undefined;
    className?: string | undefined;
    contentEditable?: "inherit" | (boolean | "false" | "true") | undefined;
    contextMenu?: string | undefined;
    dir?: string | undefined;
    draggable?: (boolean | "false" | "true") | undefined;
    hidden?: boolean | undefined;
    id?: string | undefined;
    lang?: string | undefined;
    nonce?: string | undefined;
    placeholder?: string | undefined;
    slot?: string | undefined;
    spellCheck?: (boolean | "false" | "true") | undefined;
    style?: import("react").CSSProperties | undefined;
    tabIndex?: number | undefined;
    title?: string | undefined;
    translate?: "no" | "yes" | undefined;
    radioGroup?: string | undefined;
    role?: import("react").AriaRole | undefined;
    about?: string | undefined;
    content?: string | undefined;
    datatype?: string | undefined;
    inlist?: any;
    prefix?: string | undefined;
    property?: string | undefined;
    rel?: string | undefined;
    resource?: string | undefined;
    rev?: string | undefined;
    typeof?: string | undefined;
    vocab?: string | undefined;
    autoCapitalize?: string | undefined;
    autoCorrect?: string | undefined;
    autoSave?: string | undefined;
    color?: string | undefined;
    itemProp?: string | undefined;
    itemScope?: boolean | undefined;
    itemType?: string | undefined;
    itemID?: string | undefined;
    itemRef?: string | undefined;
    results?: number | undefined;
    security?: string | undefined;
    unselectable?: "off" | "on" | undefined;
    inputMode?: "none" | "text" | "search" | "tel" | "url" | "email" | "numeric" | "decimal" | undefined;
    is?: string | undefined;
    'aria-activedescendant'?: string | undefined;
    'aria-atomic'?: (boolean | "false" | "true") | undefined;
    'aria-autocomplete'?: "none" | "both" | "inline" | "list" | undefined;
    'aria-braillelabel'?: string | undefined;
    'aria-brailleroledescription'?: string | undefined;
    'aria-busy'?: (boolean | "false" | "true") | undefined;
    'aria-checked'?: boolean | "mixed" | "false" | "true" | undefined;
    'aria-colcount'?: number | undefined;
    'aria-colindex'?: number | undefined;
    'aria-colindextext'?: string | undefined;
    'aria-colspan'?: number | undefined;
    'aria-controls'?: string | undefined;
    'aria-current'?: boolean | "page" | "false" | "true" | "time" | "step" | "location" | "date" | undefined;
    'aria-describedby'?: string | undefined;
    'aria-description'?: string | undefined;
    'aria-details'?: string | undefined;
    'aria-disabled'?: (boolean | "false" | "true") | undefined;
    'aria-dropeffect'?: "none" | "copy" | "move" | "link" | "execute" | "popup" | undefined;
    'aria-errormessage'?: string | undefined;
    'aria-expanded'?: (boolean | "false" | "true") | undefined;
    'aria-flowto'?: string | undefined;
    'aria-grabbed'?: (boolean | "false" | "true") | undefined;
    'aria-haspopup'?: boolean | "listbox" | "grid" | "menu" | "false" | "true" | "dialog" | "tree" | undefined;
    'aria-hidden'?: (boolean | "false" | "true") | undefined;
    'aria-invalid'?: boolean | "false" | "true" | "grammar" | "spelling" | undefined;
    'aria-keyshortcuts'?: string | undefined;
    'aria-label'?: string | undefined;
    'aria-labelledby'?: string | undefined;
    'aria-level'?: number | undefined;
    'aria-live'?: "off" | "assertive" | "polite" | undefined;
    'aria-modal'?: (boolean | "false" | "true") | undefined;
    'aria-multiline'?: (boolean | "false" | "true") | undefined;
    'aria-multiselectable'?: (boolean | "false" | "true") | undefined;
    'aria-orientation'?: "horizontal" | "vertical" | undefined;
    'aria-owns'?: string | undefined;
    'aria-placeholder'?: string | undefined;
    'aria-posinset'?: number | undefined;
    'aria-pressed'?: boolean | "mixed" | "false" | "true" | undefined;
    'aria-readonly'?: (boolean | "false" | "true") | undefined;
    'aria-relevant'?: "all" | "text" | "additions" | "additions removals" | "additions text" | "removals" | "removals additions" | "removals text" | "text additions" | "text removals" | undefined;
    'aria-required'?: (boolean | "false" | "true") | undefined;
    'aria-roledescription'?: string | undefined;
    'aria-rowcount'?: number | undefined;
    'aria-rowindex'?: number | undefined;
    'aria-rowindextext'?: string | undefined;
    'aria-rowspan'?: number | undefined;
    'aria-selected'?: (boolean | "false" | "true") | undefined;
    'aria-setsize'?: number | undefined;
    'aria-sort'?: "none" | "ascending" | "descending" | "other" | undefined;
    'aria-valuemax'?: number | undefined;
    'aria-valuemin'?: number | undefined;
    'aria-valuenow'?: number | undefined;
    'aria-valuetext'?: string | undefined;
    children?: import("react").ReactNode;
    dangerouslySetInnerHTML?: {
        __html: string | TrustedHTML;
    } | undefined;
    onCopy?: import("react").ClipboardEventHandler<HTMLTableHeaderCellElement> | undefined;
    onCopyCapture?: import("react").ClipboardEventHandler<HTMLTableHeaderCellElement> | undefined;
    onCut?: import("react").ClipboardEventHandler<HTMLTableHeaderCellElement> | undefined;
    onCutCapture?: import("react").ClipboardEventHandler<HTMLTableHeaderCellElement> | undefined;
    onPaste?: import("react").ClipboardEventHandler<HTMLTableHeaderCellElement> | undefined;
    onPasteCapture?: import("react").ClipboardEventHandler<HTMLTableHeaderCellElement> | undefined;
    onCompositionEnd?: import("react").CompositionEventHandler<HTMLTableHeaderCellElement> | undefined;
    onCompositionEndCapture?: import("react").CompositionEventHandler<HTMLTableHeaderCellElement> | undefined;
    onCompositionStart?: import("react").CompositionEventHandler<HTMLTableHeaderCellElement> | undefined;
    onCompositionStartCapture?: import("react").CompositionEventHandler<HTMLTableHeaderCellElement> | undefined;
    onCompositionUpdate?: import("react").CompositionEventHandler<HTMLTableHeaderCellElement> | undefined;
    onCompositionUpdateCapture?: import("react").CompositionEventHandler<HTMLTableHeaderCellElement> | undefined;
    onFocus?: import("react").FocusEventHandler<HTMLTableHeaderCellElement> | undefined;
    onFocusCapture?: import("react").FocusEventHandler<HTMLTableHeaderCellElement> | undefined;
    onBlur?: import("react").FocusEventHandler<HTMLTableHeaderCellElement> | undefined;
    onBlurCapture?: import("react").FocusEventHandler<HTMLTableHeaderCellElement> | undefined;
    onChange?: import("react").FormEventHandler<HTMLTableHeaderCellElement> | undefined;
    onChangeCapture?: import("react").FormEventHandler<HTMLTableHeaderCellElement> | undefined;
    onBeforeInput?: import("react").FormEventHandler<HTMLTableHeaderCellElement> | undefined;
    onBeforeInputCapture?: import("react").FormEventHandler<HTMLTableHeaderCellElement> | undefined;
    onInput?: import("react").FormEventHandler<HTMLTableHeaderCellElement> | undefined;
    onInputCapture?: import("react").FormEventHandler<HTMLTableHeaderCellElement> | undefined;
    onReset?: import("react").FormEventHandler<HTMLTableHeaderCellElement> | undefined;
    onResetCapture?: import("react").FormEventHandler<HTMLTableHeaderCellElement> | undefined;
    onSubmit?: import("react").FormEventHandler<HTMLTableHeaderCellElement> | undefined;
    onSubmitCapture?: import("react").FormEventHandler<HTMLTableHeaderCellElement> | undefined;
    onInvalid?: import("react").FormEventHandler<HTMLTableHeaderCellElement> | undefined;
    onInvalidCapture?: import("react").FormEventHandler<HTMLTableHeaderCellElement> | undefined;
    onLoad?: import("react").ReactEventHandler<HTMLTableHeaderCellElement> | undefined;
    onLoadCapture?: import("react").ReactEventHandler<HTMLTableHeaderCellElement> | undefined;
    onError?: import("react").ReactEventHandler<HTMLTableHeaderCellElement> | undefined;
    onErrorCapture?: import("react").ReactEventHandler<HTMLTableHeaderCellElement> | undefined;
    onKeyDown?: import("react").KeyboardEventHandler<HTMLTableHeaderCellElement> | undefined;
    onKeyDownCapture?: import("react").KeyboardEventHandler<HTMLTableHeaderCellElement> | undefined;
    onKeyPress?: import("react").KeyboardEventHandler<HTMLTableHeaderCellElement> | undefined;
    onKeyPressCapture?: import("react").KeyboardEventHandler<HTMLTableHeaderCellElement> | undefined;
    onKeyUp?: import("react").KeyboardEventHandler<HTMLTableHeaderCellElement> | undefined;
    onKeyUpCapture?: import("react").KeyboardEventHandler<HTMLTableHeaderCellElement> | undefined;
    onAbort?: import("react").ReactEventHandler<HTMLTableHeaderCellElement> | undefined;
    onAbortCapture?: import("react").ReactEventHandler<HTMLTableHeaderCellElement> | undefined;
    onCanPlay?: import("react").ReactEventHandler<HTMLTableHeaderCellElement> | undefined;
    onCanPlayCapture?: import("react").ReactEventHandler<HTMLTableHeaderCellElement> | undefined;
    onCanPlayThrough?: import("react").ReactEventHandler<HTMLTableHeaderCellElement> | undefined;
    onCanPlayThroughCapture?: import("react").ReactEventHandler<HTMLTableHeaderCellElement> | undefined;
    onDurationChange?: import("react").ReactEventHandler<HTMLTableHeaderCellElement> | undefined;
    onDurationChangeCapture?: import("react").ReactEventHandler<HTMLTableHeaderCellElement> | undefined;
    onEmptied?: import("react").ReactEventHandler<HTMLTableHeaderCellElement> | undefined;
    onEmptiedCapture?: import("react").ReactEventHandler<HTMLTableHeaderCellElement> | undefined;
    onEncrypted?: import("react").ReactEventHandler<HTMLTableHeaderCellElement> | undefined;
    onEncryptedCapture?: import("react").ReactEventHandler<HTMLTableHeaderCellElement> | undefined;
    onEnded?: import("react").ReactEventHandler<HTMLTableHeaderCellElement> | undefined;
    onEndedCapture?: import("react").ReactEventHandler<HTMLTableHeaderCellElement> | undefined;
    onLoadedData?: import("react").ReactEventHandler<HTMLTableHeaderCellElement> | undefined;
    onLoadedDataCapture?: import("react").ReactEventHandler<HTMLTableHeaderCellElement> | undefined;
    onLoadedMetadata?: import("react").ReactEventHandler<HTMLTableHeaderCellElement> | undefined;
    onLoadedMetadataCapture?: import("react").ReactEventHandler<HTMLTableHeaderCellElement> | undefined;
    onLoadStart?: import("react").ReactEventHandler<HTMLTableHeaderCellElement> | undefined;
    onLoadStartCapture?: import("react").ReactEventHandler<HTMLTableHeaderCellElement> | undefined;
    onPause?: import("react").ReactEventHandler<HTMLTableHeaderCellElement> | undefined;
    onPauseCapture?: import("react").ReactEventHandler<HTMLTableHeaderCellElement> | undefined;
    onPlay?: import("react").ReactEventHandler<HTMLTableHeaderCellElement> | undefined;
    onPlayCapture?: import("react").ReactEventHandler<HTMLTableHeaderCellElement> | undefined;
    onPlaying?: import("react").ReactEventHandler<HTMLTableHeaderCellElement> | undefined;
    onPlayingCapture?: import("react").ReactEventHandler<HTMLTableHeaderCellElement> | undefined;
    onProgress?: import("react").ReactEventHandler<HTMLTableHeaderCellElement> | undefined;
    onProgressCapture?: import("react").ReactEventHandler<HTMLTableHeaderCellElement> | undefined;
    onRateChange?: import("react").ReactEventHandler<HTMLTableHeaderCellElement> | undefined;
    onRateChangeCapture?: import("react").ReactEventHandler<HTMLTableHeaderCellElement> | undefined;
    onResize?: import("react").ReactEventHandler<HTMLTableHeaderCellElement> | undefined;
    onResizeCapture?: import("react").ReactEventHandler<HTMLTableHeaderCellElement> | undefined;
    onSeeked?: import("react").ReactEventHandler<HTMLTableHeaderCellElement> | undefined;
    onSeekedCapture?: import("react").ReactEventHandler<HTMLTableHeaderCellElement> | undefined;
    onSeeking?: import("react").ReactEventHandler<HTMLTableHeaderCellElement> | undefined;
    onSeekingCapture?: import("react").ReactEventHandler<HTMLTableHeaderCellElement> | undefined;
    onStalled?: import("react").ReactEventHandler<HTMLTableHeaderCellElement> | undefined;
    onStalledCapture?: import("react").ReactEventHandler<HTMLTableHeaderCellElement> | undefined;
    onSuspend?: import("react").ReactEventHandler<HTMLTableHeaderCellElement> | undefined;
    onSuspendCapture?: import("react").ReactEventHandler<HTMLTableHeaderCellElement> | undefined;
    onTimeUpdate?: import("react").ReactEventHandler<HTMLTableHeaderCellElement> | undefined;
    onTimeUpdateCapture?: import("react").ReactEventHandler<HTMLTableHeaderCellElement> | undefined;
    onVolumeChange?: import("react").ReactEventHandler<HTMLTableHeaderCellElement> | undefined;
    onVolumeChangeCapture?: import("react").ReactEventHandler<HTMLTableHeaderCellElement> | undefined;
    onWaiting?: import("react").ReactEventHandler<HTMLTableHeaderCellElement> | undefined;
    onWaitingCapture?: import("react").ReactEventHandler<HTMLTableHeaderCellElement> | undefined;
    onAuxClick?: import("react").MouseEventHandler<HTMLTableHeaderCellElement> | undefined;
    onAuxClickCapture?: import("react").MouseEventHandler<HTMLTableHeaderCellElement> | undefined;
    onClick?: import("react").MouseEventHandler<HTMLTableHeaderCellElement> | undefined;
    onClickCapture?: import("react").MouseEventHandler<HTMLTableHeaderCellElement> | undefined;
    onContextMenu?: import("react").MouseEventHandler<HTMLTableHeaderCellElement> | undefined;
    onContextMenuCapture?: import("react").MouseEventHandler<HTMLTableHeaderCellElement> | undefined;
    onDoubleClick?: import("react").MouseEventHandler<HTMLTableHeaderCellElement> | undefined;
    onDoubleClickCapture?: import("react").MouseEventHandler<HTMLTableHeaderCellElement> | undefined;
    onDrag?: import("react").DragEventHandler<HTMLTableHeaderCellElement> | undefined;
    onDragCapture?: import("react").DragEventHandler<HTMLTableHeaderCellElement> | undefined;
    onDragEnd?: import("react").DragEventHandler<HTMLTableHeaderCellElement> | undefined;
    onDragEndCapture?: import("react").DragEventHandler<HTMLTableHeaderCellElement> | undefined;
    onDragEnter?: import("react").DragEventHandler<HTMLTableHeaderCellElement> | undefined;
    onDragEnterCapture?: import("react").DragEventHandler<HTMLTableHeaderCellElement> | undefined;
    onDragExit?: import("react").DragEventHandler<HTMLTableHeaderCellElement> | undefined;
    onDragExitCapture?: import("react").DragEventHandler<HTMLTableHeaderCellElement> | undefined;
    onDragLeave?: import("react").DragEventHandler<HTMLTableHeaderCellElement> | undefined;
    onDragLeaveCapture?: import("react").DragEventHandler<HTMLTableHeaderCellElement> | undefined;
    onDragOver?: import("react").DragEventHandler<HTMLTableHeaderCellElement> | undefined;
    onDragOverCapture?: import("react").DragEventHandler<HTMLTableHeaderCellElement> | undefined;
    onDragStart?: import("react").DragEventHandler<HTMLTableHeaderCellElement> | undefined;
    onDragStartCapture?: import("react").DragEventHandler<HTMLTableHeaderCellElement> | undefined;
    onDrop?: import("react").DragEventHandler<HTMLTableHeaderCellElement> | undefined;
    onDropCapture?: import("react").DragEventHandler<HTMLTableHeaderCellElement> | undefined;
    onMouseDown?: import("react").MouseEventHandler<HTMLTableHeaderCellElement> | undefined;
    onMouseDownCapture?: import("react").MouseEventHandler<HTMLTableHeaderCellElement> | undefined;
    onMouseEnter?: import("react").MouseEventHandler<HTMLTableHeaderCellElement> | undefined;
    onMouseLeave?: import("react").MouseEventHandler<HTMLTableHeaderCellElement> | undefined;
    onMouseMove?: import("react").MouseEventHandler<HTMLTableHeaderCellElement> | undefined;
    onMouseMoveCapture?: import("react").MouseEventHandler<HTMLTableHeaderCellElement> | undefined;
    onMouseOut?: import("react").MouseEventHandler<HTMLTableHeaderCellElement> | undefined;
    onMouseOutCapture?: import("react").MouseEventHandler<HTMLTableHeaderCellElement> | undefined;
    onMouseOver?: import("react").MouseEventHandler<HTMLTableHeaderCellElement> | undefined;
    onMouseOverCapture?: import("react").MouseEventHandler<HTMLTableHeaderCellElement> | undefined;
    onMouseUp?: import("react").MouseEventHandler<HTMLTableHeaderCellElement> | undefined;
    onMouseUpCapture?: import("react").MouseEventHandler<HTMLTableHeaderCellElement> | undefined;
    onSelect?: import("react").ReactEventHandler<HTMLTableHeaderCellElement> | undefined;
    onSelectCapture?: import("react").ReactEventHandler<HTMLTableHeaderCellElement> | undefined;
    onTouchCancel?: import("react").TouchEventHandler<HTMLTableHeaderCellElement> | undefined;
    onTouchCancelCapture?: import("react").TouchEventHandler<HTMLTableHeaderCellElement> | undefined;
    onTouchEnd?: import("react").TouchEventHandler<HTMLTableHeaderCellElement> | undefined;
    onTouchEndCapture?: import("react").TouchEventHandler<HTMLTableHeaderCellElement> | undefined;
    onTouchMove?: import("react").TouchEventHandler<HTMLTableHeaderCellElement> | undefined;
    onTouchMoveCapture?: import("react").TouchEventHandler<HTMLTableHeaderCellElement> | undefined;
    onTouchStart?: import("react").TouchEventHandler<HTMLTableHeaderCellElement> | undefined;
    onTouchStartCapture?: import("react").TouchEventHandler<HTMLTableHeaderCellElement> | undefined;
    onPointerDown?: import("react").PointerEventHandler<HTMLTableHeaderCellElement> | undefined;
    onPointerDownCapture?: import("react").PointerEventHandler<HTMLTableHeaderCellElement> | undefined;
    onPointerMove?: import("react").PointerEventHandler<HTMLTableHeaderCellElement> | undefined;
    onPointerMoveCapture?: import("react").PointerEventHandler<HTMLTableHeaderCellElement> | undefined;
    onPointerUp?: import("react").PointerEventHandler<HTMLTableHeaderCellElement> | undefined;
    onPointerUpCapture?: import("react").PointerEventHandler<HTMLTableHeaderCellElement> | undefined;
    onPointerCancel?: import("react").PointerEventHandler<HTMLTableHeaderCellElement> | undefined;
    onPointerCancelCapture?: import("react").PointerEventHandler<HTMLTableHeaderCellElement> | undefined;
    onPointerEnter?: import("react").PointerEventHandler<HTMLTableHeaderCellElement> | undefined;
    onPointerEnterCapture?: import("react").PointerEventHandler<HTMLTableHeaderCellElement> | undefined;
    onPointerLeave?: import("react").PointerEventHandler<HTMLTableHeaderCellElement> | undefined;
    onPointerLeaveCapture?: import("react").PointerEventHandler<HTMLTableHeaderCellElement> | undefined;
    onPointerOver?: import("react").PointerEventHandler<HTMLTableHeaderCellElement> | undefined;
    onPointerOverCapture?: import("react").PointerEventHandler<HTMLTableHeaderCellElement> | undefined;
    onPointerOut?: import("react").PointerEventHandler<HTMLTableHeaderCellElement> | undefined;
    onPointerOutCapture?: import("react").PointerEventHandler<HTMLTableHeaderCellElement> | undefined;
    onGotPointerCapture?: import("react").PointerEventHandler<HTMLTableHeaderCellElement> | undefined;
    onGotPointerCaptureCapture?: import("react").PointerEventHandler<HTMLTableHeaderCellElement> | undefined;
    onLostPointerCapture?: import("react").PointerEventHandler<HTMLTableHeaderCellElement> | undefined;
    onLostPointerCaptureCapture?: import("react").PointerEventHandler<HTMLTableHeaderCellElement> | undefined;
    onScroll?: import("react").UIEventHandler<HTMLTableHeaderCellElement> | undefined;
    onScrollCapture?: import("react").UIEventHandler<HTMLTableHeaderCellElement> | undefined;
    onWheel?: import("react").WheelEventHandler<HTMLTableHeaderCellElement> | undefined;
    onWheelCapture?: import("react").WheelEventHandler<HTMLTableHeaderCellElement> | undefined;
    onAnimationStart?: import("react").AnimationEventHandler<HTMLTableHeaderCellElement> | undefined;
    onAnimationStartCapture?: import("react").AnimationEventHandler<HTMLTableHeaderCellElement> | undefined;
    onAnimationEnd?: import("react").AnimationEventHandler<HTMLTableHeaderCellElement> | undefined;
    onAnimationEndCapture?: import("react").AnimationEventHandler<HTMLTableHeaderCellElement> | undefined;
    onAnimationIteration?: import("react").AnimationEventHandler<HTMLTableHeaderCellElement> | undefined;
    onAnimationIterationCapture?: import("react").AnimationEventHandler<HTMLTableHeaderCellElement> | undefined;
    onTransitionEnd?: import("react").TransitionEventHandler<HTMLTableHeaderCellElement> | undefined;
    onTransitionEndCapture?: import("react").TransitionEventHandler<HTMLTableHeaderCellElement> | undefined;
}>;
export default StyledTh;
