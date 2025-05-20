# Storybook Code Examples

## States

```tsx
<Link text="Default" href="https://www.monday.com" />
```

## RightToLeft

```tsx
<>
      <Link text="اقرأ أكثر" href="https://www.monday.com" icon={IconLink} />
      <Link text="קרא עוד" href="https://www.monday.com" iconPosition="end" icon={Info} />
    </>
```

## WithIcons

```tsx
<>
      <Link text="Read more" href="https://www.monday.com" icon={ExternalPage} />
      <Link text="Read more" href="https://www.monday.com" iconPosition="end" icon={ExternalPage} />
    </>
```

## ReferenceLink

```tsx
<div>
      {`Lorem Ipsum has been the industry's `}
      <Link inlineText inheritFontSize text="standard" href="https://www.monday.com" />
      {` dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`}
    </div>
```

## ShorteningTexts

```tsx
<div>
      {`Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
      galley of type and scrambled it to make a type specimen book. `}
      <Link text="Read more" href="https://www.monday.com" inheritFontSize inlineText />
    </div>
```

