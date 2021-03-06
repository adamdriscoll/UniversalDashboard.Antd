---
external help file: UniversalDashboard.Antd-help.xml
Module Name: UniversalDashboard.Antd
online version:
schema: 2.0.0
---

# New-UDAntdDropdown

## SYNOPSIS
Sample control for UniversalDashboard.

## SYNTAX

```
New-UDAntdDropdown [[-Id] <String>] [[-ClassName] <String>] [[-OverlayClassName] <String>]
 [[-OverlayStyle] <Hashtable>] [[-Content] <ScriptBlock>] [[-Menu] <Object>] [-Disabled] [-Visible]
 [[-OnVisibleChange] <ScriptBlock>] [-IsEndpoint] [-AutoRefresh] [[-RefreshInterval] <Int32>]
 [[-Placement] <String>] [[-TargetOffset] <Int32[]>] [[-Trigger] <String>] [[-Style] <Hashtable>]
 [<CommonParameters>]
```

## DESCRIPTION
Sample control function for UniversalDashboard.
This function must have an ID and return a hash table.

## EXAMPLES

### EXAMPLE 1
```
<example usage>
Explanation of what the example does
```

## PARAMETERS

### -Id
An id for the component default value will be generated by new-guid.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: 1
Default value: (New-Guid).ToString()
Accept pipeline input: False
Accept wildcard characters: False
```

### -ClassName
{{ Fill ClassName Description }}

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OverlayClassName
{{ Fill OverlayClassName Description }}

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: 3
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OverlayStyle
{{ Fill OverlayStyle Description }}

```yaml
Type: Hashtable
Parameter Sets: (All)
Aliases:

Required: False
Position: 4
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Content
{{ Fill Content Description }}

```yaml
Type: ScriptBlock
Parameter Sets: (All)
Aliases:

Required: False
Position: 5
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Menu
{{ Fill Menu Description }}

```yaml
Type: Object
Parameter Sets: (All)
Aliases:

Required: False
Position: 6
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Disabled
{{ Fill Disabled Description }}

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -Visible
{{ Fill Visible Description }}

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -OnVisibleChange
{{ Fill OnVisibleChange Description }}

```yaml
Type: ScriptBlock
Parameter Sets: (All)
Aliases:

Required: False
Position: 7
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IsEndpoint
{{ Fill IsEndpoint Description }}

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -AutoRefresh
{{ Fill AutoRefresh Description }}

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -RefreshInterval
{{ Fill RefreshInterval Description }}

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:

Required: False
Position: 8
Default value: 5000
Accept pipeline input: False
Accept wildcard characters: False
```

### -Placement
{{ Fill Placement Description }}

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: 9
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TargetOffset
{{ Fill TargetOffset Description }}

```yaml
Type: Int32[]
Parameter Sets: (All)
Aliases:

Required: False
Position: 10
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Trigger
{{ Fill Trigger Description }}

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: 11
Default value: Hover
Accept pipeline input: False
Accept wildcard characters: False
```

### -Style
{{ Fill Style Description }}

```yaml
Type: Hashtable
Parameter Sets: (All)
Aliases:

Required: False
Position: 12
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### Inputs (if any)
## OUTPUTS

### Output (if any)
## NOTES
General notes

## RELATED LINKS
