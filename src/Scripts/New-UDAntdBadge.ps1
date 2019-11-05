<#
.SYNOPSIS
    Sample control for UniversalDashboard.
.DESCRIPTION
    Sample control function for UniversalDashboard. This function must have an ID and return a hash table.
.PARAMETER Id
    An id for the component default value will be generated by new-guid.
.EXAMPLE
    PS C:\> <example usage>
    Explanation of what the example does
.INPUTS
    Inputs (if any)
.OUTPUTS
    Output (if any)
.NOTES
    General notes
#>
function New-UDAntdBadge {
    [CmdletBinding(DefaultParameterSetName = 'Count')]
    param(

        [Parameter(ParameterSetName = 'Dot')]
        [ValidateSet('success', 'processing', 'default', 'error', 'warning')]
        [string]$Status,

        [Parameter(ParameterSetName = 'Dot')]
        [string]$Text,
      
        [Parameter(ParameterSetName = 'Count')]
        [int]$OverflowCount = 9999,

        [Parameter(ParameterSetName = 'Count')]
        [int]$Count,
      
        [Parameter(ParameterSetName = 'Count')]
        [hashtable]$Style,
      
        [Parameter(ParameterSetName = 'Count')]
        [switch]$ShowZero,
      
        [Parameter(ParameterSetName = 'Dot')]
        [switch]$Dot,
      
        [Parameter(ParameterSetName = 'Dot')]
        [string]$Color,
      
        [Parameter(ParameterSetName = 'Dot')]
        [ValidateSet('pink', 'red', 'yellow', 'orange', 'cyan', 'green', 'blue', 'purple', 'geekblue', 'magenta', 'volcano', 'gold', 'lime')]
        [string]$PresetColor,  
        
        [Parameter()]
        [string]$Id = (New-Guid).ToString(),
        [Parameter()]
        [string]$ClassName,       
        [Parameter()]
        [string]$Title,
        [Parameter()]
        [int[]]$OffSet,
        [Parameter()]
        [object]$Content
    )

    End {

        if ($PSBoundParameters.ContainsKey('Color')) {
            $SelectedColor = $Color
        }
        else {
            $SelectedColor = $PresetColor
        }
            
        @{
            assetId       = $AssetId 
            isPlugin      = $true 
            type          = "ud-antd-badge"
            id            = $Id
            className     = $ClassName
            offset        = $OffSet
            showZero      = $ShowZero.IsPresent
            dot           = $Dot.IsPresent
            overflowCount = $OverflowCount
            count         = $Count
            status        = $Status
            color         = $SelectedColor
            style         = $Style
            title         = $Title
            text          = $Text   
            content       = $Content
        }
    }
}
