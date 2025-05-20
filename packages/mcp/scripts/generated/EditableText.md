# Storybook Code Examples

## Types

```tsx
<div className={styles.typesContainer}>
      <div className={styles.typeContainer}>
        <EditableText type={EditableText.types.TEXT1} weight={EditableText.weights.NORMAL} value="Text1 Normal" className={styles.editableText} />
        <EditableText type={EditableText.types.TEXT1} weight={EditableText.weights.MEDIUM} value="Text1 Medium" className={styles.editableText} />
        <EditableText type={EditableText.types.TEXT1} weight={EditableText.weights.BOLD} value="Text1 Bold" className={styles.editableText} />
      </div>
      <div className={styles.typeContainer}>
        <EditableText type={EditableText.types.TEXT2} weight={EditableText.weights.NORMAL} value="Text2 Normal" className={styles.editableText} />
        <EditableText type={EditableText.types.TEXT2} weight={EditableText.weights.MEDIUM} value="Text2 Medium" className={styles.editableText} />
        <EditableText type={EditableText.types.TEXT2} weight={EditableText.weights.BOLD} value="Text2 Bold" className={styles.editableText} />
      </div>
      <div className={styles.typeContainer}>
        <EditableText type={EditableText.types.TEXT3} weight={EditableText.weights.NORMAL} value="Text3 Normal" className={styles.editableText} />
        <EditableText type={EditableText.types.TEXT3} weight={EditableText.weights.MEDIUM} value="Text3 Medium" className={styles.editableText} />
      </div>
    </div>
```

## Multiline

```tsx
<EditableText type={EditableText.types.TEXT1} weight={EditableText.weights.NORMAL} multiline value={`This is a multiline
here's the second line`} className={styles.editableText} />
```

